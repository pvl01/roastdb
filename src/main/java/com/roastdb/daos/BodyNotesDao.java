package com.roastdb.daos;

import com.roastdb.models.BodyNote;
import com.roastdb.models.BodyNotes;
import com.roastdb.repositories.BodyNotesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BodyNotesDao {

  private BodyNotesRepository bodyNotesRepository;

  @Autowired
  private BodyNotesDao(BodyNotesRepository bodyNotesRepository) {
    this.bodyNotesRepository = bodyNotesRepository;
  }

  @GetMapping("/findAllBodyNotes")
  public List<BodyNotes> findAllBodyNotes() {
    return (List<BodyNotes>) bodyNotesRepository.findAll();
  }

  @GetMapping("/findBodyNotes/{bodyNotes}")
  public BodyNotes findBodyNote(@PathVariable("bodyNotes") Integer bodyNotes) {
    return bodyNotesRepository.findById(bodyNotes).get();
  }

  @GetMapping("/createBodyNotes")
  public BodyNotes createBodyNote() {
    BodyNotes bodyNotes = new BodyNotes();
    return bodyNotesRepository.save(bodyNotes);
  }

  @GetMapping("/deleteBodyNotes/{bodyNotes}")
  public void deleteBodyNote(@PathVariable("bodyNotes") Integer bodyNotes) {
    bodyNotesRepository.deleteById(bodyNotes);
  }

  @GetMapping("/renameBodyNotes/{bodyNotes}")
  public BodyNotes renameBodyNote(
      @PathVariable("bodyNotes") Integer bodyNotes) {
    BodyNotes notes = bodyNotesRepository.findById(bodyNotes).get();
    notes.setNote("Very Balanced");
    return bodyNotesRepository.save(notes);
  }
}
