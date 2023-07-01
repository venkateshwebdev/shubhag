const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-title">Low Sperm Count?</div>
                <div className="contact-title">Low Motility?</div>
                <div>NOT TO WORRY</div>
                <div><span>Talk to our</span> Experts</div>
            </div>
            <div className="contact-form">
                <div>Looks fantastic to me & I am Interested</div>
                <form>
                    <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Name" />
                    </div>
                    <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" />
                    </div>
                    <div>
                    <label for="mobile">Mobile</label>
                    <input type="Number" id="mobile" />
                    </div>
                    <div>
                    <label for='types'>Please Provide Your Business Details </label>
                    <select id="types">
                        <option value="Gynaecologist">Gynaecologist</option>
                        <option value="IUI clinics">IUI clinics</option>
                        <option value="General physician">General physician</option>
                        <option value="others">others</option>
                    </select>
                    </div>
                    <div>
                    <label for="CityName">City Name</label>
                    <input type="text" id="CityName" placeholder="City Name" />
                    </div>
                    <div>
                    <label for="Other">Other Business Details</label>
                    <input type="text" id="Other" placeholder="Other Business Details" />
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;