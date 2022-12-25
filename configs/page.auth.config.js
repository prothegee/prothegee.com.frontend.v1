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




const __production__ = !process.env.ROLLUP_WATCH;

const __distribution_path__ = "../prothegee.com.public/dist/auth/";

const __signin__ = "signin-bundle";
const __signup__ = "signup-bundle";


// only for web auth page
export default [
    {
        //#region signin
        input: [
            "src/pages/auth/signin.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __signin__,
            file: __distribution_path__ + __signin__ + ".js"
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
                output: __signin__ + ".css"
            }),
            typescript({
                include: ["src/**/*", "node_modules", "src/modules/**/*", "src/pages/**/*"],
                exclude: [],
                compilerOptions: {
                    module: "esnext",
                    target: "esnext",
                    moduleResolution: "node",
                    esModuleInterop: true,
                    forceConsistentCasingInFileNames: true,
                    skipLibCheck: true,
                    typeRoots: ["node_modules/@types/"],
                    types: ["svelte"]
                }
            }),
            commonjs({
                extensions: [".js", ".ts"]
            }),
        ]
        //#endregion
    },
    {
        //#region signup
        input: [
            "src/pages/auth/signup.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __signup__,
            file: __distribution_path__ + __signup__ + ".js"
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
                output: __signup__ + ".css"
            }),
            typescript({
                include: ["src/**/*", "node_modules", "src/modules/**/*", "src/pages/**/*"],
                exclude: [],
                compilerOptions: {
                    module: "esnext",
                    target: "esnext",
                    moduleResolution: "node",
                    esModuleInterop: true,
                    forceConsistentCasingInFileNames: true,
                    skipLibCheck: true,
                    typeRoots: ["node_modules/@types/"],
                    types: ["svelte"]
                }
            }),
            commonjs({
                extensions: [".js", ".ts"]
            }),
        ]
        //#endregion
    }
];
