package com.roastdb.daos;

import com.roastdb.models.BodyNotes;
import com.roastdb.repositories.BodyNotesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BodyNotesDao {

  private BodyNotesRepository bodyNotesRepository;

  @Autowired
  private BodyNotesDao(BodyNotesRepository bodyNotesRepository) {
    this.bodyNotesRepository = bodyNotesRepository;
  }

  @GetMapping("/body-notes")
  public List<BodyNotes> findAllBodyNotes() {
    return (List<BodyNotes>) bodyNotesRepository.findAll();
  }
}
