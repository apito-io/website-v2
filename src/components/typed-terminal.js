import React from "react";
import { TypedTerminal } from "react-component-typed-terminal";

const typedJsProps = {
    loop: false,
    typeSpeed: 5,
    showCursor: false,
}

const terminalData = [
    {
        command: "apito create project -n fitnessApp",
        results: [
            "Project Full Name: Fitness Tracker App",
            "🔌 Select Database Engine",
            "    ✔️ boltDB",
            "      postgresSQL",
            "      mysql",
            "⚡ Downloading engine from: https://github.com/apito-io/engine/releases/download/stable/engine.zip",
            "⚡ Engine binary extracted to: /Users/john/.apito/fitnessApp/fitnessApp",
            "✅ Project created successfully!",
            "To run the project, run the following command",
            "$ <span style=\"color: lime;\">apito run -p fitnessApp</span>",
        ],
    },
]

const CustomTerminalComponent = () => {

    return (
        <div className={"w-full max-w-full mx-auto"}>
            <TypedTerminal typedJsProps={typedJsProps} terminalData={terminalData} title={"📁 Apito CLI -- -bash -80x24 "} promptText={'john@local:~ $'}/>
        </div>
    );
};

export default CustomTerminalComponent;
