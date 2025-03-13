'use client';

import React, { useEffect, useState } from 'react';
import { AddCommentButton, AddCommentContainer, CancelButton, CommentBody, CommentCard, CommentEmail, CommentName, Container, Input, Modal, ModalButton, ModalContent, ModalHeader, PaginationButton, PaginationContainer, PreviousLink, TextArea, Title } from '@/styles/global.styles';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async (id: string): Promise<Comment[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return response.json();
};

const PostPage = ({ params }: { params: { id: string } }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    body: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadComments = async () => {
      if (!params.id) return; 
      try {
        setLoading(true);
        const data = await fetchComments(params.id);
        setComments(data);
      } catch (error) {
        setError('No se pudieron obtener los comentarios');
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, [params.id]); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCommentData: Comment = {
      id: comments.length + 1,
      name: newComment.name,
      email: newComment.email,
      body: newComment.body,
    };

    setComments([...comments, newCommentData]);
    setNewComment({
      name: '',
      email: '',
      body: '',
    });
    setIsModalOpen(false);
  };

  if (loading) return <Container>Cargando...</Container>;
  if (error) return <Container>{error}</Container>;

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Title>Comentarios del Post {params.id}</Title>

      <AddCommentContainer>
        <PreviousLink href="/posts">← Anterior</PreviousLink>
        <AddCommentButton onClick={() => setIsModalOpen(true)}>
          Agregar Comentario
        </AddCommentButton>
      </AddCommentContainer>

      {currentComments.length > 0 ? (
        <div>
          {currentComments.map((comment) => (
            <CommentCard key={comment.id}>
              <CommentName>{comment.name}</CommentName>
              <CommentEmail>Email: {comment.email}</CommentEmail>
              <CommentBody>{comment.body}</CommentBody>
            </CommentCard>
          ))}
        </div>
      ) : (
        <div>No hay comentarios disponibles para este post.</div>
      )}

      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            isActive={false}
          >
            Anterior
          </PaginationButton>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index}
              onClick={() => paginate(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PaginationButton>
          ))}

          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            isActive={false}
          >
            Siguiente
          </PaginationButton>
        </PaginationContainer>
      )}

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
      </div>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>Agregar un Comentario</ModalHeader>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={newComment.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={newComment.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="body">Comentario</label>
                <TextArea
                  id="body"
                  name="body"
                  value={newComment.body}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <CancelButton onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </CancelButton>
                <ModalButton type="submit">Guardar</ModalButton>
              </div>
            </form>
          </ModalContent>
        </Modal>
      )}    
    </Container>
  );
};

export default PostPage;
