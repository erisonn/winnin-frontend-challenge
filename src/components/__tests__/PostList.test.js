import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import PostList from "../PostList/PostList";
import { BrowserRouter } from "react-router-dom";

test('Should render post items, should have pinned text if the post is pinned', () => {

    const postsArray = [
        {
        title: 'Why is react so cool?',
        mediaurl: 'self',
        thumbnail: 'self',
        author: 'Erison',
        forum: `reactjs`,
        date: '3 hours ago',
        id: '01',
        pinned: true
        }
    ]
    
    render(
        <BrowserRouter>
            <PostList posts={postsArray}/>
        </BrowserRouter>
    )
    
    expect(screen.getByTestId('post-list')).toBeInTheDocument();
    expect(screen.getByText('Why is react so cool?')).toBeInTheDocument();
    expect(screen.getByText('Erison')).toBeInTheDocument();
    expect(screen.getByText('reactjs')).toBeInTheDocument();
    expect(screen.getByText('PINNED')).toBeInTheDocument();
    expect(screen.getByTestId('post-item')).toHaveTextContent('3 hours ago')
})

test('should not have pinned text if the post is not pinned', () => {

    const postsArray = [
        {
        title: 'Why is react so cool?',
        mediaurl: 'self',
        thumbnail: 'self',
        author: 'Erison',
        forum: `reactjs`,
        date: '3 hours ago',
        id: '01',
        pinned: false
        }
    ]
    
    render(
        <BrowserRouter>
            <PostList posts={postsArray}/>
        </BrowserRouter>
    )
    
    expect(screen.queryByText('PINNED')).not.toBeInTheDocument();
})