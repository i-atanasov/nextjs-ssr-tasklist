import Link from "next/link"
import Image from "next/image"

import Layout from "../../components/Layout"
import banner from "../../public/images/banner.jpeg"
import TasksList from "./TaskLIst"

export default function Tasks() {
    return (
        <Layout>
            <h3>Tasks</h3>
            <Image 
                src={banner} 
                alt="banner image"
                />
            <TasksList/>
            <h4>
                <Link href="/">Back to home</Link>
            </h4>
        </Layout>
    )
}