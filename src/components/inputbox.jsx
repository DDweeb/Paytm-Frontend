/* eslint-disable react/prop-types */

export function InputBox({ label, placeholder, onChange , type , isError , onblur }) {
  return (
    <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-black font-semibold">{label}</label>
        <input type={type || "text"} onChange={onChange} onBlur={onblur} required className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${isError ? "border-red-500" : "border-gray-300"
            }`} placeholder={placeholder} />
        {isError && (
            <p className="mt-1 text-xs text-red-500">This field is required.</p>
        )}
    </div>
)
}