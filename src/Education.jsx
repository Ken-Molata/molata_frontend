import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: '#013220',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '30px',
          color: '#5754ff',
        }}
      >
        My Education
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Bagacay Elementary School: March of 2015</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468206434_2494233340968425_9036636329887069320_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmd5HEGgKvds9dRiH0F6YJp200bqnF2X6nbTRuqcXZfuTzEVN78Q9PXkgoaTx__es5d5WLh1Xrd_KhVcgOpgwo&_nc_ohc=N0hVmv4Nyc8Q7kNvgHhL1PN&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=APA6mqjGG63xvFDZr1BMLbw&oh=00_AYBWAetnr8CVs3hcuUurSRglNXF_llv3txSiDGR_YYW4Hg&oe=6765814B"
                alt="Elementary 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Bagacay Elementary Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468321930_2494237930967966_8080631861904914472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp_NZ3Rv4znCI1N4yQG5qIjERJF_AwhZKMREkX8DCFkhjoFptFwpG0skiNSkjXDLzSYJmF5xWM06mSKjRKKHM7&_nc_ohc=CAU9BcLHDuUQ7kNvgGeKboF&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=Az1EJivC4MNi5-hIxavOakB&oh=00_AYBNisQtMQY7XToZmTsdJH9_diM7xRQEfly3s4DVZENxaw&oe=6765818A"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Bagacay Elementary Main Building</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t1.6435-9/93803317_1234163406975431_7342941191802978304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEUR3EaTyh7mS2x4Rcl6ac-DWINO9IbbYQNYg070htthLd8ZqiKxP82gUHYkRc-o1bdwRA9P6FHZvPg4lPTjxi4&_nc_ohc=IgrY-hXNcMMQ7kNvgEruPU4&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=A-I3SSrVE_uSKsSkjq0VGin&oh=00_AYCiCB-lzyPhrDCgP9E9We_6Kb-g1TeY8qL-4jZG4_PAvA&oe=67696BDF"
                alt="Elementary 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Picture</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Bagacay National Highschool Graduation: May of 2021</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/468220169_2494233450968414_2617709922879221950_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHQ7cy4gpozQ65Wc2pmBc83kQxjHcFPMRSRDGMdwU8xFOJb4ZMMib5vqhK2JVJnp8nS9qZcOIE-HcT56s_SqYmB&_nc_ohc=4EMVPmmm8DkQ7kNvgHVLK4L&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=ApyFldApZOxJ_8IjJLUFs_e&oh=00_AYBD4hUI-lNTJ233XjbYEfmvOBDXHP6E4dcg0Bv-8YVRaw&oe=676577C2"
                alt="Highschool 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/468093887_2494233484301744_1257244724015878298_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhTZUb6viL9x8zr1TipSqWG-l1XwX6nrUb6XVfBfqetTHh0uV8Ax59DG3bf2BuL5RROvkxAoYX2mbEWViRDmgF&_nc_ohc=kLayJfFqZpkQ7kNvgEmZDv-&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=AKybI1Sjqz-6iXRIQLU1pHD&oh=00_AYANvRsFii_dn0Vjxb7JvGzSavsjGYdZ4Cts2pic3Wd_TQ&oe=67659ECB"
                alt="Highschool 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Main Gate</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/463026429_2459141551144271_7716014099842626733_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHttC6dArFiVcb0eAAuRr2kAkKdt9CPPqACQp230I8-oM7e8-v8eX4cgIk-M7tJU7y3Ky6Vgcugo_Qg2vqG-ISG&_nc_ohc=JvIueFEOoHUQ7kNvgHy4LLo&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=AJSabSyPAGYNSUdZfa4YVwv&oh=00_AYAJxPVpoxLOl_mN8Huci5i6jts5pz2jxpzq_8Vhi2BnSQ&oe=676598CD"
                alt="High School Pics"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>BNHS Student Selfies</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#5754ff' }}>College</h3>
          <p style={{ fontSize: '1rem', color: '#333' }}>Naga College Foundation Inc. Graduation: (2023-2027)</p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/467458716_358634437309042_3018473439349220060_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeG--0WMRNL0q3OiyjIQgpzf8JetMyOqqrrwl60zI6qqurDrWPXI3a-UWGTl7ygNpW2ZQsAUwmBRPGQntQmH2Gb6&_nc_ohc=gWkpOauNPFMQ7kNvgEQBk_-&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QFsNGXizMVoljTBPmUSr1vq8_jVcvnC3YGrc3yqk96KcA&oe=6767B3A0"
                alt="College 1"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Logo</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/468179587_2494234747634951_5443717159984611254_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEW6Jlhxc6XjlS64pYx-C_uqlIo3iM6MDCqUijeIzowMGfDMWBCbQc3o79zRWfLE2QRQXnEZfsChi0Nv-ZJdltV&_nc_ohc=f1FUG4LwMrYQ7kNvgFJQUQ8&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=A6md9JwXyiLH-1Jy2rulfx4&oh=00_AYCLu7OJ4aQTTgbyKvac_H5uYwAXEHC6lpbbtoeZOsDLkg&oe=67659F1D"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Pic as a Freshman</p>
              </Carousel.Caption>
            </Carousel.Item>
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/468157868_2494249030966856_127511651536700651_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFBlVcwlnaiKEAJTza_CjwQNHvkPSSYM2o0e-Q9JJgzalNQpro1jlBRAFQkqL53B6hqRf5B7xXwfbw32hPknU46&_nc_ohc=UDqFIUtc8vYQ7kNvgGQ__Kq&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=AK_QLk6OYNR2pkLS3B7wIFD&oh=00_AYAC9B35_4vaGlTNsRohf2oUULK_-vas1aCeO8f04NWMlg&oe=6765A638"
                alt="College 2"
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <Carousel.Caption>
                <p>NCF Swimming Class</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;