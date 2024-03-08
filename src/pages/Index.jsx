import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Select, Stack, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrashAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Dummy data for the table
  const articles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlfGVufDB8fHx8MTcwOTg5NTA3Nnww&ixlib=rb-4.0.3&q=80&w=1080',
      name: "Articolo 1",
      code: "A001",
      gtin: "0123456789",
      quantity: 100,
      price: "€10,00",
      category: "Elettronica",
      supplier: "Fornitore 1",
    },
    // ... other articles
  ];

  // Function to handle the deletion of an article
  const deleteArticle = (id) => {
    console.log("Deleting article with id:", id);
    // Implementation of delete functionality
  };

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" mb={6}>
        Gestione Articoli
      </Heading>
      <Box mb={4}>
        <Flex justifyContent="space-between" mb={3}>
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
            Aggiungi Articolo
          </Button>
          <IconButton icon={<FaSearch />} />
        </Flex>
        <Input placeholder="Cerca articoli..." mb={3} />
        <Stack direction="row" spacing={4} mb={3}>
          <Select placeholder="Categoria">
            <option value="elettronica">Elettronica</option>
            <option value="abbigliamento">Abbigliamento</option>
            {/* Add other categories */}
          </Select>
          <Select placeholder="Fornitore">
            <option value="fornitore1">Fornitore 1</option>
            <option value="fornitore2">Fornitore 2</option>
            {/* Add other suppliers */}
          </Select>
          {/* Add other filters if needed */}
        </Stack>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Immagine</Th>
            <Th>Nome</Th>
            <Th>Codice</Th>
            <Th>GTIN</Th>
            <Th>Quantità</Th>
            <Th>Prezzo</Th>
            <Th>Categoria</Th>
            <Th>Fornitore</Th>
            <Th>Azioni</Th>
          </Tr>
        </Thead>
        <Tbody>
          {articles.map((article) => (
            <Tr key={article.id}>
              <Td>
                <img src={article.image} alt={article.name} />
              </Td>
              <Td>{article.name}</Td>
              <Td>{article.code}</Td>
              <Td>{article.gtin}</Td>
              <Td>{article.quantity}</Td>
              <Td>{article.price}</Td>
              <Td>{article.category}</Td>
              <Td>{article.supplier}</Td>
              <Td>
                <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                <IconButton aria-label="Delete" icon={<FaTrashAlt />} onClick={() => deleteArticle(article.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for adding/editing an article */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aggiungi/Modifica Articolo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="article-name" isRequired>
              <FormLabel>Nome Articolo</FormLabel>
              <Input placeholder="Nome Articolo" />
            </FormControl>
            {/* Add other form controls for article details */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Salva
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Annulla
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
