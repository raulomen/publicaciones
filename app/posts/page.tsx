'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  PaginationButton,
  PaginationContainer,
  PostBody,
  PostCard,
  PostLink,
  PostTitle,
  SearchInput,
  SortButton,
} from '@/styles/global.styles';

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('No se pudieron cargar los posts');
  }
  return response.json();
};

const PostsPage = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const { data: posts, error, isLoading, isError } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <div>Cargando...</div>;
  if (isError && error instanceof Error) return <div>{error.message}</div>;

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPosts = filteredPosts?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const totalPages = Math.ceil((sortedPosts?.length || 0) / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts?.slice(indexOfFirstPost, indexOfLastPost) || [];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div>
        <SearchInput
          type="text"
          placeholder="Buscar por título"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SortButton onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Ordenar por título ({sortOrder === 'asc' ? 'Ascendente' : 'Descendente'})
        </SortButton>
      </div>

      <div>
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <PostCard key={post.id}>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
              <PostLink href={`/posts/${post.id}`}>Ver detalles</PostLink>
            </PostCard>
          ))
        ) : (
          <div>No se encontraron posts.</div>
        )}
      </div>

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
    </Container>
  );
};

export default PostsPage;
