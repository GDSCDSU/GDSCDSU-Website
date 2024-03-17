import { maxHeaderSize } from 'http';
import Image from 'next/image';
export default function Home(){
    return (
    <>
    <Image src='/Header.svg' alt='' width={2000} height={0} />
    <br/>
    <Image src='/WhatisGDSC.svg' alt='' width={400} height={0} />
    <br/>
    <Image src='/Question.svg' alt='' width={200} height={0} />
    </>
        )
}