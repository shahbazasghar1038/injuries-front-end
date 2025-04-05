import React, { useEffect, useRef, useState } from "react"
import { Input } from "antd"

const GooglePlacesAutocomplete = ({
  value = "",
  onChange,
  placeholder,
  className,
  size = "middle",
  status,
}) => {
  const inputRef = useRef(null)
  const autocompleteRef = useRef(null)
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (document.querySelector("#google-maps")) return

      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=${'process.env.REACT_APP_GOOGLE_MAPS_API_KEY'}&libraries=places`
      script.async = true
      script.defer = true
      script.id = "google-maps"
      script.onload = initializeAutocomplete
      document.body.appendChild(script)
    }

    if (!window.google || !window.google.maps) {
      loadGoogleMapsScript()
    } else {
      initializeAutocomplete()
    }

    return () => {
      if (autocompleteRef.current) {
        window.google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [])

  const initializeAutocomplete = () => {
    if (!inputRef.current?.input || !window.google) return

    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current.input, {
      types: ["address"],
      fields: ["formatted_address", "address_components", "geometry"],
    })

    autocompleteRef.current.addListener("place_changed", handlePlaceSelect)
  }

  const handlePlaceSelect = () => {
    if (!autocompleteRef.current) return

    const place = autocompleteRef.current.getPlace()
    if (place?.formatted_address) {
      setInputValue(place.formatted_address)
      if (onChange) onChange(place.formatted_address)
    }
  }

  const handleInputChange = (e) => {
    const val = e.target.value
    setInputValue(val)
    if (onChange) onChange(val)
  }

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={className}
      size={size}
      status={status}
    />
  )
}

export default GooglePlacesAutocomplete
