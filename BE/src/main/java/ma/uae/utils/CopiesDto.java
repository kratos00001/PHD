package ma.uae.utils;

import java.util.Date;

import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ma.uae.models.FileDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CopiesDto {
	private Long id;
	
	private Long imageId;
	private Long cinId;
	private Long bacId;
	private Long licenseId;
	private Long masterId;
	private Long cvId;
}
