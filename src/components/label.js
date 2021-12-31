import React from 'react';
import { Link } from 'gatsby';

const Label = ({ text }) => (
    <Link
        to={`/tags/${text}`}
        rel="bookmark"
        className="label"
    >
        {text}
    </Link>
);

export default Label;