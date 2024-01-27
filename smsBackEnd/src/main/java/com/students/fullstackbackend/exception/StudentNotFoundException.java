package com.students.fullstackbackend.exception;

public class StudentNotFoundException extends RuntimeException{

    public StudentNotFoundException(Long id) {
        super("Student cannot be found with this id : " +  id);
    }
}
