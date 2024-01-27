package com.students.fullstackbackend.repository;

import com.students.fullstackbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
