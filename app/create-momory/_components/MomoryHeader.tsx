"use client";
import Header from '@/components/layout/Header'
import { useMomoryStore } from '@/store/useMomoryStore'


export default function MomoryHeader() {
    const setCurrentPage = useMomoryStore((state) => state.setCurrentPage)
  return (
    <>
     <Header type={"arrow"} setCurrentPage={setCurrentPage}/> 
    </>
  )
}
