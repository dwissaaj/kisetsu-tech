
import { useDisclosure, Modal, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, CardHeader, Image, Snippet, ModalContent, ModalHeader } from '@nextui-org/react'
import React from 'react'
import NextImage from "next/image";
import ProfileCard from './profileCard';
import ModalProfile from './editProfile';

export default function Profile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className='w-full h-1/2'>
      <Card className='h-full'>
        <CardHeader>Your Profile</CardHeader>
        <CardBody className=''>
          <div>
            <Card isBlurred>
              <CardBody className=' items-center gap-2'>
                <Image width={300} height={300} as={NextImage} alt="NextUI hero Image" src='/home/1.png' />
                <ProfileCard fullName='test' email='ads' company='org' occupation='job' />
              </CardBody>
            </Card>

          </div>
        </CardBody>
        <CardFooter>
          <Button onPress={onOpen}>Edit Your Profile</Button>
          <Modal backdrop='blur' isDismissable={false} placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Change Everything</ModalHeader>
                  <ModalBody>
                    <ModalProfile />
                  </ModalBody>
                  <ModalFooter>
                    <Button  color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    
                  </ModalFooter>
                </>
              )}
            </ModalContent>

          </Modal>
        </CardFooter>
      </Card>

    </div>
  )
}
