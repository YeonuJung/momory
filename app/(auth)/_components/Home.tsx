"use client";

import { useState, useEffect } from "react"

export default function HomeClient() {
 

  useEffect(() => {
    const accessToken = document.cookie.split("; ").find(row => row.startsWith("accessToken="))?.split("=")[1]
    if (accessToken) {
     localStorage.setItem("access_token", accessToken)
}}, [])

  if (isLoggedIn) {
    // return <LoggedInContent />  // 로그인 후 UI
  }
//   return <PublicContent />
}      // 로그인 전 UI
