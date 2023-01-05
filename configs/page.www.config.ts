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

const __distribution_path__ = "../prothegee.com.public/dist/www/";

const __home__ = "home-bundle";


// only for www subdomain
export default [
    {
        //#region home
        input: [
            "src/pages/www/home.ts",
        ],
        output: {
            sourcemap: !__production__,
            format: "cjs",
            name: __home__,
            file: __distribution_path__ + __home__ + ".js"
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
                output: __home__ + ".css"
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
