import {useState} from 'react';

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [submittedData, setSubmittedData] = useState(null);
    

    function handleSubmit(e) {
        e.preventDefault();

        setSubmittedData({
         name,
         email,
         phone,
       });

    }

    return (

        <>
           <form onSubmit ={handleSubmit}>
            
                    <label>Name:</label>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                />
                <p>You typed: {name}</p>

                <br />

                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />
                <p>Your email: {email}</p>

                <br />

                <label>Phone:</label>
                <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                />
                <p>Your phone: {phone}</p>

                <br />

                <button type="submit">Submit</button>
           </form>

                {submittedData && (
                    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid black" }}>
                    <h3>Contact Saved:</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Phone: {submittedData.phone}</p>
                    </div>
             )}

        </>


    )
}