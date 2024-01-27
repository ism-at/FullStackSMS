package com.students.fullstackbackend.controller;

import com.students.fullstackbackend.exception.StudentNotFoundException;
import com.students.fullstackbackend.model.Student;
import com.students.fullstackbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/students")
    Student createNewStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @GetMapping("/students")
    List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    Student getStudentById(@PathVariable Long id){
        /* We can use this Code, or we customize our Exception handling !
        Optional<Student> studentOptional = studentRepository.findById(id);
        if(studentOptional.isPresent()){
            return studentOptional.get();
        }
        else {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Student cannot be found !"
            );
        } */
        return studentRepository.findById(id)
                .orElseThrow(() -> new StudentNotFoundException(id));
    }

    @PutMapping("/students/{id}")
    Student updateStudent(@PathVariable Long id, @RequestBody Student updateStudentParam){
        return studentRepository.findById(id)
                .map(s -> {
                    s.setFirstName(updateStudentParam.getFirstName());
                    s.setLastName(updateStudentParam.getLastName());
                    s.setEmail(updateStudentParam.getEmail());
                    return studentRepository.save(s);
                }).orElseThrow(() -> new StudentNotFoundException(id));
    }

    @DeleteMapping("/students/{id}")
    String deleteById(@PathVariable Long id){
        if(!studentRepository.existsById(id)){
            throw new StudentNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "Student with id " + id + " has been deleted";
    }

}
