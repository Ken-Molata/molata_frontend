import React from 'react';

function About() {
  return (
    <div
      id="about"
      style={{
        padding: '130px 180px',
        background: '#0d3634', // Dark background
        fontFamily: '"Poppins", sans-serif',
        color: '#F3F4F6',
      }}
    >
      {/* Title Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#3B82F6', // Bright accent color
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          About Me
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            color: '#9CA3AF',
            marginTop: '10px',
          }}
        >
          Learn more from reading below to get to know me more.
        </p>
      </div>

      {/* Content Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Card Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
          }}
        >
          {/* Image Card */}
          <div
            style={{
              flex: '1',
              minWidth: '300px',
              maxWidth: '400px',
              position: 'relative',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <img
              src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468093156_2494186624306430_5429309057828648603_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHN3DtB1AG7s2aU9irR1DJk96Ctdo1k31b3oK12jWTfVuvNcIGFAbldQ8vYNIUMexQ6xQ5G9ZxoRiT_llSO9TTa&_nc_ohc=0DDjeu7EeHgQ7kNvgGmPXmE&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=AyDuzfUelP3qJdoUwjV78HF&oh=00_AYC0wwJ5dTSoycN0NBIsMfvmLqbFpbJcCejCsgk43g7i7Q&oe=6765860D"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                textAlign: 'center',
                color: '#F3F4F6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
               John Kent Molata
              </h3>
              <p style={{ fontSize: '0.9rem' }}>Computer Science Student</p>
            </div>
          </div>

          {/* Text Card */}
          <div
            style={{
              flex: '2',
              backgroundColor: '#1F2937',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              Hi, I’m <strong style={{ color: '#3B82F6' }}>John Kent Molata</strong>, a passionate learner and a beginner in the world of coding. Born on{' '}
              <strong>February 6, 2003</strong>, and raised in the inspiring town of{' '}
              <strong>Bagacay Tinambac Camarines Sur</strong>, My passion and love for computer started when i was in Grade 7, i was excited to learn the basic information about computers and how to use it. From that moment i knew i was gonna pursue the a career that is related to computer.
              After my Senior High School graduation i decided to get a course that will help me develop my skills in computer related field that's how i decided that i will take Computer Science.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                lineHeight: '1.8',
              }}
            >
              My focus is on learning <strong style={{ color: '#3B82F6' }}>Computer Science</strong>, unraveling how the digital
              world operates, and contributing to meaningful projects. I’m still at the process of familariazing myself with the ways in coding but i am dedicated to learn and grow.
            </p>
            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
              }}
            >
              In my free time, you’ll find me <strong>watching online videos</strong> or spending time with my pets,
              that basically sums up what i do in a daily basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;