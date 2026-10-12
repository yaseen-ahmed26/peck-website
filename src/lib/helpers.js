// @ts-nocheck
import Toastify from "toastify-js"

export function showToast(text){
    Toastify({
        text: text,
        offset: {
            y: 120
        },
        duration: 2000,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "#0f172a",
            color: "#f8fafc",
            border: "1px solid",
            borderRadius: "4px"
        }
    }).showToast();
}