package com.roastdb.daos;

import com.roastdb.models.TastingNotes;
import com.roastdb.repositories.TastingNotesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TastingNotesDao {

  private TastingNotesRepository tastingNotesRepository;

  @Autowired
  private TastingNotesDao(TastingNotesRepository tastingNotesRepository) {
    this.tastingNotesRepository = tastingNotesRepository;
  }

  @GetMapping("/tasting-notes")
  public List<TastingNotes> findAllTastingNotes() {
    return (List<TastingNotes>) tastingNotesRepository.findAll();
  }
}
