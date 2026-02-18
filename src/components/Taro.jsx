const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#d4af37',
  border: '1px solid #d4af37',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  transition: '0.3s',
  boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)',
  width: '100%'
};

export default function Taro({
  name,
  id,
  suite,
  description,
  interpretation,
  imageUrl 
}) {
  return (
    <div 
    style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      backgroundColor: "#1a1a1d", 
      padding: "20px", 
      height: '100%',
      borderRadius: "8px" 
      }}>
      <h2>{name} (№{id})</h2>
      
      {/* Якщо у тебе будуть зображення карт */}
      {imageUrl && <img
      style={{textAlign:"center", width: "200px"}}
       src={imageUrl} alt={name} />}
      
      {/* <p><strong>Символіка:</strong> {suite}</p> */}
      
      {/* <div style={{ color: "#ffffff" }}>
        <p><strong>Опис:</strong> {description}</p>
      </div> */}
      
      <div style={{ color: "#d4af37" }}>
        <p><strong>Інтерпретація:</strong> {interpretation}</p>
      </div>
      <div style={{flexGrow: 1}}></div>
      <br />
      <button 
  style={buttonStyle}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#d4af37';
    e.target.style.color = '#000';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#d4af37';
  }}
>
  Обрати карту
</button>
    </div> 
  );
}