"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const [teacher, setTeacher] = useState("");
    const [isSpinning, setIsSpinning] = useState(false);
    const [showTeacher, setShowTeacher] = useState(false);

    const teachers = [
        "優しいけど怒ると厳しい数学の先生",
        "おもしろいけど授業に入ると真面目な英語の先生",
        "面白い実験が好きで、生徒にモテる科学の先生",
        "歴史好きだけどたまに未来も気にする先生",
        "運動神経抜群で鬼ごっこしてくれる体育の先生",
        "おしゃれでお喋りな、おばちゃん美術の先生",
        "優秀な国語の先生",
        "厳しいけど頼れる社会の先生"
    ];

    const spinCapsule = () => {
        setIsSpinning(true);
        setShowTeacher(false);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * teachers.length);
            setTeacher(teachers[randomIndex]);
            setIsSpinning(false);
            setShowTeacher(true);
        }, 2000); // 2秒後にランダムな先生を表示
    };

    return (
        <div className="flex flex-col items-center">
            <motion.div
                className={`flex justify-center items-center bg-lightblue rounded-full border-4 border-blue-500 ${isSpinning ? 'animate-spin' : ''}`}
                style={{
                    width: "100px",
                    height: "200px",
                }}
            >
            </motion.div>

            <button
                onClick={spinCapsule}
                className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                先生ガチャを回す
            </button>

            {showTeacher && (
                <motion.div
                    className="mt-4 text-2xl font-bold"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}
                >
                    {teacher}が出た！
                </motion.div>
            )}
        </div>
    );
}
