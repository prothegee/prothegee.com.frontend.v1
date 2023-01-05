/**
 * this configuration meant to be only for web auth page and certain status code
 * while some access only allowed on some subdomain
*/
import svelte from "rollup-plugin-svelte";
import multi from "@rollup/plugin-multi-entry";
import nodeResolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import css from "rollup-plugin-css-only";
import autoProcess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";




const __production__ = !process.env.ROLLUP_WATCH;

const __distribution_path__ = "../prothegee.com.public/dist/auth/";

const __signIn__ = "signIn-bundle";
const __signUp__ = "signUp-bundle";
const __emailVerification__ = "emailVerification-bundle";
const __resetPassword__ = "resetPassword-bundle";


// only for web auth page
export default [
    {
        //#region signin
        input: [
            "src/pages/auth/signIn.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __signIn__,
            file: __distribution_path__ + __signIn__ + ".js"
        },
        plugins: [
            svelte({
                preprocess: [
                    autoProcess()
                ],
                compilerOptions: { dev: !__production__ },
            }),
            multi(),
            nodeResolve(),
            strip({
                labels: ["console.*", "assert.*"]
            }),
            __production__ && terser(),
            css({
                output: __signIn__ + ".css"
            }),
            typescript(),
            commonjs({
                extensions: [".js", ".ts"]
            }),
            copy({
                targets:
                [
                    {
                        src: ["src/css/main.css", "src/css/main.css.map"],
                        dest: __distribution_path__
                    }
                ]
            }),
        ]
        //#endregion
    },
    {
        //#region signup
        input: [
            "src/pages/auth/signUp.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __signUp__,
            file: __distribution_path__ + __signUp__ + ".js"
        },
        plugins: [
            svelte({
                preprocess: [
                    autoProcess()
                ],
                compilerOptions: { dev: !__production__ },
            }),
            multi(),
            nodeResolve(),
            strip({
                labels: ["console.*", "assert.*"]
            }),
            __production__ && terser(),
            css({
                output: __signUp__ + ".css"
            }),
            typescript(),
            commonjs({
                extensions: [".js", ".ts"]
            }),
            copy({
                targets:
                [
                    {
                        src: ["src/css/main.css", "src/css/main.css.map"],
                        dest: __distribution_path__
                    }
                ]
            }),
        ]
        //#endregion
    },
    {
        //#region emailVerification
        input: [
            "src/pages/auth/emailVerification.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __emailVerification__,
            file: __distribution_path__ + __emailVerification__ + ".js"
        },
        plugins: [
            svelte({
                preprocess: [
                    autoProcess()
                ],
                compilerOptions: { dev: !__production__ },
            }),
            multi(),
            nodeResolve(),
            strip({
                labels: ["console.*", "assert.*"]
            }),
            __production__ && terser(),
            css({
                output: __emailVerification__ + ".css"
            }),
            typescript(),
            commonjs({
                extensions: [".js", ".ts"]
            }),
            copy({
                targets:
                [
                    {
                        src: ["src/css/main.css", "src/css/main.css.map"],
                        dest: __distribution_path__
                    }
                ]
            }),
        ]
        //#endregion
    },
    {
        //#region resetPassword
        input: [
            "src/pages/auth/emailVerification.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __resetPassword__,
            file: __distribution_path__ + __resetPassword__ + ".js"
        },
        plugins: [
            svelte({
                preprocess: [
                    autoProcess()
                ],
                compilerOptions: { dev: !__production__ },
            }),
            multi(),
            nodeResolve(),
            strip({
                labels: ["console.*", "assert.*"]
            }),
            __production__ && terser(),
            css({
                output: __resetPassword__ + ".css"
            }),
            typescript(),
            commonjs({
                extensions: [".js", ".ts"]
            }),
            copy({
                targets:
                [
                    {
                        src: ["src/css/main.css", "src/css/main.css.map"],
                        dest: __distribution_path__
                    }
                ]
            }),
        ]
        //#endregion
    }
];
