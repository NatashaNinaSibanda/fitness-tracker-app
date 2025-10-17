import React from "react"; 
import Team from "../assets/Team.webp";
import AboutImage from "../assets/AboutUs.jpg";

function AboutUs() {
    return (
        <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-red-600 mb-4">
                  About GoGetFit
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    At GoGetFit, we are passionate about your fitness. We believe fitness is more than just a routine, its a lifestyle that one lives.
                    Our mission is to make fitness tracking effortlessly easy and make staying healthy accessible, enjoyable and fun.
                </p>
            </div>

            <div className="grid md;grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        Ignite your fitness journey with GoGetFit. Empowering you to reach your Goals.
                    </h3>
                    <p className=" text-gray-700 mb-4 leading-relaxed">
                        GoGetFit was created to help people of all levels to train and get their fitness goals.
                        We do that by tracking their workouts monitoring their progress, and staying consistent. 
                        We know that the path to fitness isn’t always easy — that’s why our platform is designed to keep you motivated,
                        supported, and connected.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you're a beginner or an expert, whether you're training at home or at the gym, GoGetFit is your go to fitness tracker.
                        Join us today and take the first step towards building healthy habits, set goals and celebrate every milestone. 
                        Be part of our growing community and lets transform your fitness journey today!
                    </p>
                </div>

                <div className="grid grid-colos-2 gap-4">
                    <img 
                    src={Team}
                    alt="GoGetFit Team"
                    className="rounded-xl shadow-lg object-cover w-full h-56 md-h-72"
                     />
                     <img 
                     src={AboutUs}
                     alt="About GoGetFit" 
                     className="rounded-xl shadow-lg object-cover w-full h-56 md:h-72 mt-6 md:mt-12"
                     />
                </div> 
            </div>
        </section>
    );
}

export default AboutUs;