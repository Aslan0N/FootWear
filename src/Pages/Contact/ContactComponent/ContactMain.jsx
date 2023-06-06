import React from 'react'

const ContactMain = () => {
  return (
    <>
        <section id='contact-main'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <h2>Contact Information</h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p>
                       <i className="fa-solid fa-location-dot"></i> 198 West 21th Street,
                            Suite 721 New York NY 10016
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            + 1235 2355 98
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p>
                        <i class="fa-regular fa-paper-plane"></i>
                        info@yoursite.com
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <p>
                        <i className="fa-solid fa-globe"></i>
                        yoursite.com
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <form>
                            <label htmlFor="" className='couple'>
                                First Name
                                <input type="text" placeholder='Your firstname'/>
                            </label>
                            <label htmlFor="" className='couple'>
                                Last Name
                                <input type="text" placeholder='Your lastname'/>
                            </label>
                            <label htmlFor="" className='block'>
                                Email
                                <input type="text" placeholder='Your email address'/>
                            </label>
                            <label htmlFor="" className='block'>
                                Subject
                                <input type="text" placeholder='Your subject of message'/>
                            </label>
                            <label htmlFor="" className='textarea'>
                                Message
                                <textarea name="" id="textarea" cols="50" rows="8" placeholder='Say something about us'></textarea>
                            </label>
                            <button>Send Message</button>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 err">
                   <div className="item">
                   <i class="fa-solid fa-circle-exclamation"></i>
                    <h2>Oops! Something went wrong.</h2>
                    <p>This page didn't load Google Maps correctly. See the JavaScript console for <br />
                     technical details.</p>
                   </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactMain