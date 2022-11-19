import React from "react";

const GoogleMap = () => {
  return (
    <div className="container">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.828175561418!2d105.72723982397413!3d21.056117343934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454570374c5e3%3A0xdeb4689fca01b0ff!2zTmjhu5VuLCBNaW5oIEtoYWksIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1665355520114!5m2!1svi!2s"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
