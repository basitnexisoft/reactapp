import React from 'react';

const Contact = ({closeform}) => {
    return (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="popup-from absolute mt-12 text-black">
                <form className='w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl'>
                    <h1 className=" text 4xl font-semibold text-center">Book Now</h1>
                    <div className="flex flex-col">
                        <input type="text" name='userFirstName' placeholder='First Name' className="py-3 px-2 bg-[#d5f2ec] rounded" />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name='userLastName' placeholder='Last Name' className="py-3 px-2 bg-[#d5f2ec] rounded" />
                    </div>
                    <div className="flex flex-col">
                        <input type="email" name='userEmail' placeholder='Email' className="py-3 px-2 bg-[#d5f2ec] rounded" />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name='userPhoneNumber' placeholder='Phone Number' className="py-3 px-2 bg-[#d5f2ec] rounded" />
                    </div>

                    <div>
                        <btton>Book appointment</btton>
                        <button className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500" onClick={closeform}>close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
