import React from "react";

interface HeadersProps {
  label: string;
}
const Header = ({ label }: HeadersProps) => {
  return <h1>{label}</h1>;
};

export default Header;
