import svelte from "rollup-plugin-svelte";
import multi from "@rollup/plugin-multi-entry";
import nodeResolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import terser from "@rollup/plugin-terser";
import { optimizeImports } from "carbon-preprocess-svelte";
import css from "rollup-plugin-css-only";




const __production__ = !process.env.ROLLUP_WATCH;

const __bundle_name__ = "www_prothegee_com-bundle";

const __distribution_path__ = "../prothegee.com.public/dist/www/";


// only for www subdomain
export default {
    input: [
        "src/_pages/www/home.js",
    ],
    output: {
        sourcemap: !__production__,
        format: "cjs",
        name: __bundle_name__,
        file: __distribution_path__ + __bundle_name__ + ".js"
    },
    plugins: [
        svelte({
            preprocess: [optimizeImports()],
            compilerOptions: { dev: !__production__ },
        }),
        multi(),
        nodeResolve(),
        strip({
            labels: ["console.*", "assert.*"]
        }),
        __production__ && terser(),
        css({
            output: __bundle_name__ + ".css"
        }),
    ]
};
