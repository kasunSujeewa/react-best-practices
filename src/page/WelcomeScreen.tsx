import React, { useState } from 'react'
import twitterImage from '../assets/images/twitter.avif';
import { Button } from '@/components/ui/button';
import { Apple } from 'lucide-react';
import ModalComponent from '@/components/ModalComponent';
import AuthForm from '@/components/AuthForm';
import countries from '@/data/Countries';

const formattedCountries = countries.map(country => ({
    value: country,
    label: country
}));


const WelcomeScreen: React.FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [isSignupDialogOpen, setisSignupDialogOpen] = useState<boolean>(false);

    const openDialog = () => setIsDialogOpen(true);
    const closeDialog = () => setIsDialogOpen(false);

    const handleSignInSubmit = (values: Record<string, string>) => {
        console.log('Sign In:', values);
        // Handle sign-in logic
    };

    const openSignupDialog = () => setisSignupDialogOpen(true);
    const closeSignupDialog = () => setisSignupDialogOpen(false);

    const handleSignUpSubmit = (values: Record<string, string>) => {
        console.log('Sign Up:', values);
        // Handle sign-in logic
    };
    return (
        <>
            <div className="bg-black text-white h-screen px-3 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 h-5/6 content-center">
                    <div className="grid lg:col-span-3 justify-items-center content-center">
                        <img src={twitterImage} alt="" className="w-2/4" />
                    </div>
                    <div className="grid content-center grid-cols-1 lg:col-span-2 gap-3 p-5">
                        <div className="grid text-6xl font-extrabold mb-10 pt-10">
                            Happenning now
                        </div>
                        <div className="grid text-2xl mb-5 font-extrabold">
                            Join today.
                        </div>
                        <div className="grid">
                            <Button className='md:w-1/2 rounded-2xl text-black font-bold' variant={'outline'}><Apple className='mx-2' />Sign Up With Apple</Button>
                        </div>
                        <div className="grid grid-cols-9 md:w-1/2 items-center">
                            <div className="grid col-span-4">
                                <hr />

                            </div>
                            <div className="grid text-center">
                                or
                            </div>
                            <div className="grid col-span-4">
                                <hr />
                            </div>
                        </div>
                        <div className="grid">
                            <Button className='md:w-1/2 rounded-2xl bg-blue-500 font-bold text-lg' onClick={openSignupDialog}>Create Account</Button>
                        </div>
                        <div className="grid text-xs md:w-1/2 mb-12">
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                        </div>
                        <div className="grid text-md font-bold">
                            Already have an account?
                        </div>
                        <div className="grid">
                            <Button className='md:w-1/2 rounded-2xl font-bold text-lg' onClick={openDialog} >Sign In</Button>
                        </div>
                        <ModalComponent isOpen={isDialogOpen} onClose={closeDialog}>
                            <AuthForm onSubmit={handleSignInSubmit}>
                                <AuthForm.SignIn>
                                    <AuthForm.Input type="email" name="email" placeholder="Email" />
                                    <AuthForm.Input type="password" name="password" placeholder="Password" />
                                    <AuthForm.Button>Sign In</AuthForm.Button>
                                </AuthForm.SignIn>
                            </AuthForm>
                        </ModalComponent>

                        <ModalComponent isOpen={isSignupDialogOpen} onClose={closeSignupDialog}>
                            <AuthForm onSubmit={handleSignUpSubmit}>
                                <AuthForm.SignUp>
                                    <AuthForm.Input type="name" name="name" placeholder="Name" />
                                    <AuthForm.Select options={formattedCountries} children='Select Country'/>
                                    <AuthForm.Input type="email" name="email" placeholder="Email" />
                                    <AuthForm.Input type="password" name="password" placeholder="Password" />
                                    <AuthForm.Input type="password" name="confirmpassword" placeholder="Confirm Password" />
                                    <AuthForm.Button>Sign Up</AuthForm.Button>
                                </AuthForm.SignUp>
                            </AuthForm>
                        </ModalComponent>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomeScreen