import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Label, TextInput } from 'flowbite-react';

function ContactPage() {
    return (
        <>
            <div className="container mt-10">
                <div className="head-content">
                    <div className="text-4xl text-center pb-3 fw-bold font-merienda">Contact</div>
                    <div className="line"></div>
                    <p className="text-center text-muted mt-3">
                        For more information, please feel free to contact us !
                    </p>
                </div>
            </div>

            <section class="phone:px-5 md:px-30 lg:px-40 mt-16 bg-root_high h-[380px]">
                <div class="grid lg:grid-cols-2 phone:grid-cols-1 gap-6">

                    <div class="left-side py-5 text-white mt-2">
                        <div class="flex items-center">
                            <LocalPhoneOutlinedIcon />
                            <h4 class="uppercase ml-2 text-xl font-bold">Call us</h4>
                        </div>
                        <p class="text-gray-200 mt-3 leading-loose">
                            <ul>
                                <li>Tel: +855 16 509 371</li>
                                <li>WhatsApp: +855 16 509 371</li>
                                <li>Line: +855 16 509 371</li>
                            </ul>
                        </p>

                        <div class="flex items-center mt-8">
                            <LocationOnOutlinedIcon />
                            <h4 class="uppercase ml-2 text-xl font-bold">Location</h4>
                        </div>
                        <p class="text-gray-200 mt-3">Address : 12, Street 323, Phnom Penh</p>

                        <div class="flex items-center mt-8">
                            <AccessTimeOutlinedIcon />
                            <h4 class="uppercase ml-2 text-xl font-bold">business hours</h4>
                        </div>
                        <p class="text-gray-200 mt-3">We are open 24/7</p>
                    </div>

                    <div class="right-side phone:mt-3 flex flex-col justify-center bg-white rounded-lg px-3 py-14 h-Rside lg:mt-[-35px] shadow-2xl">
                        <form class="grid gap-3 w-full h-full mt-0 px-3 py-5">
                            <div className="max-w-md">
                                <TextInput
                                    icon={EmailOutlinedIcon}
                                    placeholder="Your email"
                                    required
                                    type="email"
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    icon={LocalPhoneOutlinedIcon}
                                    placeholder="Phone number"
                                    required
                                    type="text"
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    icon={AddLocationAltOutlinedIcon}
                                    placeholder="Add : Destination"
                                    required
                                    type="text"
                                />
                            </div>

                            <div className="max-w-md">
                                <TextInput
                                    addon="From"
                                    icon={DateRangeOutlinedIcon}
                                    required
                                    type="date"
                                />
                            </div>
                            <div className="max-w-md">
                                <TextInput
                                    addon="To"
                                    icon={DateRangeOutlinedIcon}
                                    required
                                    type="date"
                                />
                            </div>

                            <div class="textArea">
                                <textarea type="date"
                                    class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block p-4"
                                    placeholder="Your message here..."></textarea>
                            </div>
                        </form>
                        <button type="submit"
                            class="text-white mr-3 w-1/4 self-end bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center">
                            Sent
                        </button>
                    </div>

                </div>
            </section>
            <div class="phone:h-[580px] lg:h-44"></div>
        </>
    )
}

export default ContactPage