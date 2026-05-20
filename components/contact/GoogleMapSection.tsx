"use client";

export default function GoogleMapSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* MAP */}
      <div className="relative h-[350px] w-full md:h-[500px] lg:h-[650px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4255.513032483611!2d-80.14254562405216!3d25.95086260076191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acf9b518db8b%3A0x72ed3d80237ba1fd!2s3040%20NE%20190th%20St%20APT%20303%2C%20Aventura%2C%20FL%2033180%2C%20USA!5e1!3m2!1sen!2sbd!4v1779273094975!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </section>
  );
}
