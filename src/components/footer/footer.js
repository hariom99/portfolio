import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            &copy; {new Date().getFullYear()}
            Hariom Kourav.
            All right reserved.
        </div>
    );
}