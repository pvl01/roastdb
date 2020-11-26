package com.roastdb.daos;

import com.roastdb.models.TastingNote;
import com.roastdb.repositories.TastingNoteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TastingNoteDao {

  private TastingNoteRepository tastingNoteRepository;

  @Autowired
  private TastingNoteDao(TastingNoteRepository tastingNoteRepository) {
    this.tastingNoteRepository = tastingNoteRepository;
  }

  @GetMapping("/tasting-note")
  public List<TastingNote> findAllTastingNotes() {
    return (List<TastingNote>) tastingNoteRepository.findAll();
  }
}