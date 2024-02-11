import { Button } from "@/components/ui/button";
import PostsClient from "./(components)/client";
import Link from "next/link";

const PostsPage = () => {
    return ( 
        <div>
            <Link href='/posts/new'><Button>New</Button></Link>
            <PostsClient />
        </div>
     );
}
 
export default PostsPage;