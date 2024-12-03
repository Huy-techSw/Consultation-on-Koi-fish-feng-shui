
type SwitchProps = {
  checked: boolean
  onChange: () => void
  id?: string
}

export const Switch = ({ checked, onChange, id }: SwitchProps) => (
  <div
    className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${
      checked ? 'bg-green-400' : 'bg-gray-400'
    }`}
    onClick={onChange}
  >
    <input
      type="checkbox"
      checked={checked}
      id={id}
      onChange={onChange}
      className="absolute opacity-0 w-0 h-0"
    />
    <span
      className={`block w-6 h-6 rounded-full bg-white transform transition-transform ${
        checked ? 'translate-x-4' : 'translate-x-0'
      }`}
    ></span>
  </div>
)
