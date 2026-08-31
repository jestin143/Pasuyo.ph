// MAP UI ONLY - no service calls, no supabase
export default function LocationPicker({ onSelect }) {
  return (
    <div className="location-picker">
      <p>LocationPicker — Map UI only.</p>
      {/* Google Maps will be initialized via lib/maps/googleMaps.js */}
    </div>
  )
}
