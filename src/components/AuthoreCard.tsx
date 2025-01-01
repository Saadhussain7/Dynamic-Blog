import React from "react"

export default function AuthoreCard() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
            <div className="flex items-center animation-fadeIn">

                <img
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
                    src="../Saad.jpg"
                    alt="Author Image" />

                <div>
                    <h3 className="text-xl font-bold">Saad Hussain</h3>
                    <p className="text-slate-500"> Web Developer | Cyber Security Student </p>
                </div>
            </div>





            <p className="mt-4 text-black leading-relaxed">
                Saad Hussain is a student of Cyber Security and also a passionate Web Developer. ''I'm a proactive computer student with strong programming skills, excited about web development and software engineering. I aim to utilize my coding expertise to create innovative applications that elevate user experiences and drive technological progress.''
            </p>

            <div className="mt-4 flex space-x-3">
                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

                    Twitter

                </a>

                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

                    Linkedin

                </a>

                <a
                    href="#"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">

                    GitHub

                </a>

            </div>
        </div>
    );
}