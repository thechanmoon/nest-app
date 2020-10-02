import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'

@Controller('movies')
export class MoviesController {
	@Get()
	getAll() {
		return 'This will return all movies!!'
	}

	@Get('/:id')
	getOne(@Param('id') MovieId: string) {
		return `This will return a moive with the id: ${MovieId}`
	}

	@Post()
	create(@Body() movieData) {
		console.log(movieData)
		return 'This will create movie'
	}

	@Delete('/:id')
	remove(@Param('id') MovieId: string) {
		return `This will delete a moive with the id: ${MovieId}`
	}

	@Patch('/:id')
	patch(@Param('id') MovieId: string, @Body() updateData) {
		return {
			updatedMovie: MovieId,
			...updateData
		}
	}
}
