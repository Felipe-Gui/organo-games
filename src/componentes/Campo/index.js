import './Campo.css';

const Campo = ({ label, placeholder, obrigatorio, valor, aoAlterado, type = 'text' }) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitar = (e) => {
    aoAlterado(e.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholderModificada} type={type} />
    </div>
  )
}

export { Campo };
