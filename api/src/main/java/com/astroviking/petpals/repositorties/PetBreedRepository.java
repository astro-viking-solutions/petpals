package com.astroviking.petpals.repositorties;

import com.astroviking.petpals.domain.PetBreed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetBreedRepository extends JpaRepository<PetBreed, Long> {
}
