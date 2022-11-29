import React from 'react'

export default function Heading({ title }) {
  return (
    <>
        <h2 style={{
            fontSize: "30px",
            color: "var(--primaryColor)",
            fontWeight: "600",
            // textAlign: "center",
            marginBottom: "60px"
        }}> {title} </h2>
    </>
  )
}
