package com.roastdb.daos;

import com.roastdb.models.BodyNote;
import com.roastdb.repositories.BodyNoteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BodyNoteDao {

  private BodyNoteRepository bodyNoteRepository;

  @Autowired
  private BodyNoteDao(BodyNoteRepository bodyNoteRepository) {
    this.bodyNoteRepository = bodyNoteRepository;
  }

  @GetMapping("/findAllBodyNote")
  public List<BodyNote> findAllBodyNote() {
    return (List<BodyNote>) bodyNoteRepository.findAll();
  }

  @GetMapping("/findBodyNote/{bodyNote}")
  public BodyNote findBodyNote(@PathVariable("bodyNote") String bodyNote) {
    return bodyNoteRepository.findById(bodyNote).get();
  }

  @GetMapping("/createBodyNote")
  public BodyNote createBodyNote() {
    BodyNote bodyNote = new BodyNote();
    return bodyNoteRepository.save(bodyNote);
  }

  @GetMapping("/deleteBodyNote/{bodyNote}")
  public void deleteBodyNote(@PathVariable("bodyNote") String bodyNote) {
    bodyNoteRepository.deleteById(bodyNote);
  }

  @GetMapping("/renameBodyNote/{bodyNote}")
  public BodyNote renameBodyNote(
      @PathVariable("bodyNote") String bodyNote) {
    BodyNote note = bodyNoteRepository.findById(bodyNote).get();
    note.setNote("Very Balanced");
    return bodyNoteRepository.save(note);
  }
}
