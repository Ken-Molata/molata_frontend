import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px',
        backgroundColor: '#0d3634',
        width: '100%',
        height: '95vh', 
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column', 
        }}
      >
        <img
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/468041809_2494247880966971_7276970474822386695_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdAbAqadU1CMnUvDwvUvp5Nk4XAiRL5lM2ThcCJEvmU5Opom41nffp9lOLvprFAsBD7oflZ4yAk94IC3f5IMI8&_nc_ohc=7I1yAnliN2cQ7kNvgEfiH9u&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=ARPPQhQQq6RAaDGfVHpxgJ7&oh=00_AYAoCx8lkkB5KQjGnNAAQ483Af4CeKM0nAZwZYd40q3fsA&oe=6765777D"
          alt="Profile"
          style={{
            width: '300px',
            height: '400px',
            objectFit: 'cover', 
            border: '4px solid white', 
            marginBottom: '10px', 
          }}
        />
        <h2 style={{ margin: '0', fontSize: '1.5rem', textAlign: 'center', color: 'white' }}>John Kent Molata</h2>
        <p style={{ marginTop: '10px', textAlign: 'center', maxWidth: '600px', color: 'white' }}>
          "Here, are the information that will help you know me. Feel free to browse all the information available in this website and hopefully we can connect with each other by visiting all my sns accounts."
        </p>
      </div>
    </div>
  );
}

export default Home;
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  }}
>
  <a href="https://www.facebook.com/kentbleak.molata" target="_blank" rel="noopener noreferrer">
    <img
      src="\src\assets\image\X.jpeg"
      alt="Click here to verify"
      style={{
        width: '50px',
        height: '50px',
        objectFit: 'cover', 
        border: '3px solid white', 
        cursor: 'pointer', 
      }}
    />
  </a>
</div>