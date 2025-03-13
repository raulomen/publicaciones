import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
`;

export const Header = styled.header`
  padding: 16px;
  background-color: #2563eb;
  color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Nav = styled.nav`
  margin-top: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  & a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export const Main = styled.main`
  flex: 1; 
  padding: 16px;
`;

export const Footer = styled.footer`
  padding: 16px;
  background-color: #2d3748;
  color: white;
  text-align: center;
  margin-top: auto;
`;



export const Content = styled.div`
  text-align: center;
  color: white;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.4); 
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 768px;
  width: 100%;
`;


export const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
`;


export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const SortButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const PostCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const PostBody = styled.p`
  font-size: 14px;
  color: #555;
`;

export const PostLink = styled.a`
  color: #1a73e8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const Container = styled.div`
padding: 1.5rem;
max-width: 64rem;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 2rem;
`;


export const AddCommentContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 1rem;
`;

export const PreviousLink = styled.a`
display: inline-block;
margin-right: auto;
color: #3182ce;
text-decoration: none;
`;

export const AddCommentButton = styled.button`
padding: 0.75rem 1.5rem;
background-color: #38a169;
color: #fff;
border-radius: 0.375rem;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: #2f855a;
}
`;

export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
`;

export const Pagination = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
`;


export const PaginationButton = styled.button<{ isActive: boolean }>`
padding: 10px 10px;
margin: 0 5px;
background-color: ${({ isActive }) => (isActive ? '#007bff' : '#f1f1f1')};
color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
border: 1px solid #ccc;
border-radius: 5px;
cursor: pointer;
&:hover {
background-color: ${({ isActive }) => (isActive ? '#0056b3' : '#ddd')};
}
&:disabled {
cursor: not-allowed;
background-color: #ddd;
}
`;

export const PaginationInfo = styled.div`
text-align: center;
margin-top: 20px;
font-size: 14px;
color: #555;
`;

export const CommentCard = styled.div`
border: 1px solid #e2e8f0;
padding: 1rem;
border-radius: 0.5rem;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin-bottom: 1rem;
background-color: #fff;
transition: background-color 0.3s;

&:hover {
  background-color: #f7fafc;
}
`;

export const CommentName = styled.h3`
font-weight: 500;
color: #2d3748;
`;

export const CommentEmail = styled.p`
font-size: 0.875rem;
color: #718096;
`;

export const CommentBody = styled.p`
margin-top: 0.5rem;
font-size: 0.875rem;
color: #4a5568;
`;

export const Modal = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 50;
`;

export const ModalContent = styled.div`
background-color: #fff;
padding: 2rem;
border-radius: 0.5rem;
max-width: 32rem;
width: 100%;
`;

export const ModalHeader = styled.h2`
font-size: 1.25rem;
font-weight: 600;
margin-bottom: 1rem;
`;

export const Input = styled.input`
width: 100%;
padding: 0.75rem;
border: 1px solid #cbd5e0;
border-radius: 0.375rem;
`;

export const TextArea = styled.textarea`
width: 100%;
padding: 0.75rem;
border: 1px solid #cbd5e0;
border-radius: 0.375rem;
`;

export const ModalButton = styled.button`
padding: 0.75rem 1.5rem;
background-color: #3182ce;
color: #fff;
border-radius: 0.375rem;
cursor: pointer;
transition: background-color 0.3s;

&:hover {
  background-color: #2b6cb0;
}
`;

export const CancelButton = styled.button`
padding: 0.75rem 1.5rem;
background-color: #edf2f7;
color: #4a5568;
border-radius: 0.375rem;
cursor: pointer;
margin-right: 1rem;

&:hover {
  background-color: #e2e8f0;
}
`;


export const UserCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const UserName = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const UserInfo = styled.p`
  font-size: 14px;
  color: #555;
`;

export const Link = styled.a`
  color: #1a73e8;
  text-decoration: none;
`;


export const Card = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
  font-size: 1.125rem;
  color: #555;

  p {
    margin-bottom: 10px;
  }

  strong {
    color: #333;
  }
`;

export const WebsiteLink = styled.a`
  color: #1e40af;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BackLink = styled.a`
  display: block;
  margin-top: 20px;
  font-size: 1rem;
  color: #1e40af;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Loader = styled.div`
  text-align: center;
  font-size: 1.25rem;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 1.25rem;
  color: red;
`;

