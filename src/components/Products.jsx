import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
    return (
        <div>
            <p>This Product Page</p> <Link to="/" className="underline">goto dashboard</Link>
        </div>
    )
}